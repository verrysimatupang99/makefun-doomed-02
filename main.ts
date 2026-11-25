const LINE = 'Delete my browser history. Then delete my browser.';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).some((arg) => arg === flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
