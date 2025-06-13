import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/default-snippet', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::DefaultSnippet />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::DefaultSnippet>
        template block text
      </Bs::DefaultSnippet>
    `);

    assert.dom().hasText('template block text');
  });
});
