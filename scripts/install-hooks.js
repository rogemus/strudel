const { test, ln, chmod } = require('shelljs');

if (test('-e', '.git/hooks')) {
  ln('-sf', '../../build/git-hooks/pre-commit', '.git/hooks/pre-commit');
  chmod('+x', '.git/hooks/pre-commit');
}