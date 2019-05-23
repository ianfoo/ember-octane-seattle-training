import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('visit teams, click logout, go to login', async function(assert) {
    await visit('/teams');
    assert.equal(currentURL(), '/teams');

    await click('[data-test-logout-button]');
    assert.equal(currentURL(), '/login');
  });
});
