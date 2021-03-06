import path from 'path';

function join (...args) {
  let len = args.length;
  let glob = args[len - 1];

  if (!Array.isArray(glob)) {
    glob = [glob];
  }

  args.pop();

  return glob.map(str => path.join(...args, str));
}

export const srcDir = 'src';
export const testDir = 'test';
export const buildDir = 'build';
export const distDir = 'lib';

export const staticDir = srcDir;
export const sassDir = srcDir;
export const cssDir = buildDir;

export const apps = ['wupjs-glyph-checkbox'];
export const bundleGlob = 'bundle.js';
export const testBundleGlob = 'test_bundle.js';

export const srcGlob = join(srcDir, ['**/*.js', '**/*.jsx']);
export const distGlob = srcGlob.concat(['!**/demo.js', '!**/demo.jsx']);
export const testGlob = join(testDir, ['**/*.test.js', '**/*.test.jsx']);
export const allTestGlob = join(testDir, ['**/*.js', '**/*.jsx']);
export const sassGlob = join(sassDir, ['*.scss']);
export const distSassGlob = sassGlob.concat('!**/demo.scss');
export const allSassGlob = join(sassDir, ['**/*.scss']);

export const srcBuildGlob = join(buildDir, srcGlob);
export const testBuildGlob = join(buildDir, testGlob);
export const cssBuildGlob = sassGlob.map(str => {
  return str.replace(/scss/g, 'css').replace(sassDir, cssDir);
});

export const allSrcGlob = srcGlob.concat(allTestGlob);
export const allBuildGlob = srcBuildGlob.concat(testBuildGlob);

export const bundleRootGlob = join(buildDir, srcDir, 'demo.js');
export const testBundleRootGlob = join(buildDir, testDir, 'index.test.js');
export const bundleBuildGlob = join(buildDir, bundleGlob);
export const testBundleBuildGlob = join(buildDir, testBundleGlob);
