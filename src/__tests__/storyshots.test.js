// @flow
import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

initStoryshots({
  test: ({ story, context }) => {
    /**
     * ref: https://github.com/storybooks/storybook/blob/master/addons/storyshots/storyshots-core/src/Stories2SnapsConverter.test.js#L3
     */
    const converter = new Stories2SnapsConverter();
    const snapshotFileName = converter.getSnapshotFileName(context);
    const storyElement = story.render(context);
    const tree = mount(storyElement)
      .find('#snapshot')
      .children()
      .first();
    const json = toJson(tree);

    if (snapshotFileName) {
      // Remind: property `toMatchSpecificSnapshot`. Property not found in Jest flowtype
      (expect(json): any).toMatchSpecificSnapshot(snapshotFileName);
    }
  },
});
