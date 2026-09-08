import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentFileName = path.basename(__filename);

const rl = readline.createInterface({ input, output });

const getJsFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true })
    .filter(f => 
      f.isFile() && 
      f.name !== currentFileName &&
      (f.name.endsWith('.js') || f.name.endsWith('.mjs') || f.name.endsWith('.cjs'))
    )
    .map(f => f.name);

const getSubfolders = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== 'node_modules' && !d.name.startsWith('.'))
    .map(d => d.name);

let currentPath = __dirname;

try {
  while (true) {
    const jsFiles = getJsFiles(currentPath);
    const relativePath = path.relative(__dirname, currentPath) || '.';

    if (jsFiles.length > 0) {
      console.log(`\n--- Arquivos JS encontrados em: ./${relativePath} ---`);
      jsFiles.forEach((file, index) => {
        console.log(`[${index + 1}] ${file}`);
      });

      const fileAnswer = await rl.question('\nDigite o número ou o nome do arquivo para executar: ');
      const fileInput = fileAnswer.trim();
      const fileIndex = parseInt(fileInput) - 1;
      const targetFile = !isNaN(fileIndex) && jsFiles[fileIndex] ? jsFiles[fileIndex] : fileInput;

      const filePath = path.join(currentPath, targetFile);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        console.error(`\nErro: O arquivo "${targetFile}" não foi encontrado. Tente novamente.`);
        continue;
      }

      rl.close();

      console.log(`\nExecutando: node ./${path.relative(__dirname, filePath)}\n`);

      spawn('node', [targetFile], {
        cwd: currentPath,
        stdio: 'inherit',
        shell: true
      });
      break;
    }

    const subfolders = getSubfolders(currentPath);

    if (subfolders.length === 0) {
      console.log(`\nNenhum arquivo .js nem subpastas encontradas em: ./${relativePath}`);
      
      if (currentPath === __dirname) {
        console.log('Encerrando...');
        rl.close();
        process.exit(1);
      }

      console.log('Voltando um nível de pasta...');
      currentPath = path.dirname(currentPath);
      continue;
    }

    console.log(`\n--- Nenhum JS em ./${relativePath}. Selecione uma pasta para entrar ---`);
    subfolders.forEach((folder, index) => {
      console.log(`[${index + 1}] ${folder}`);
    });

    const folderAnswer = await rl.question('\nDigite o número ou o nome da pasta: ');
    const folderInput = folderAnswer.trim();
    const folderIndex = parseInt(folderInput) - 1;
    const targetFolder = !isNaN(folderIndex) && subfolders[folderIndex] ? subfolders[folderIndex] : folderInput;

    const nextPath = path.join(currentPath, targetFolder);

    if (!fs.existsSync(nextPath) || !fs.statSync(nextPath).isDirectory()) {
      console.error(`\nErro: A pasta "${targetFolder}" não existe. Tente novamente.`);
      continue;
    }

    currentPath = nextPath;
  }
} catch (err) {
  console.error('Erro na execução:', err);
  rl.close();
}