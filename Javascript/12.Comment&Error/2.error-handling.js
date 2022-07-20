// try catch finally

function readFile(path) {
  throw new Error('not found file path');
  return 'fileString';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(error);
    content = ' default String';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음.');
  }
  const result = 'hi' + content;
  return result;
}

const result = processFile('path');
console.log(result);
