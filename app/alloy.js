// Load FontAwesome icon chars into global for use in TSS
Alloy.Globals.icons = require('icons');

/**
 * Unit test runner
 */
if (!ENV_PRODUCTION) {
	// if tests are enabled in config, execute test runner
  if (Alloy.CFG.run_unit_tests) {
    require('specs/tests_runner');
  }
}
