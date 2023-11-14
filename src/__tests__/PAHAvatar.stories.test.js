import Meta, { Story as PAHAvatarStory } from '@/stories/PAHAvatar.stories'; // 请根据实际情况更新路径
import { composeStory } from '@storybook/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
const PAHAvatarComponent = composeStory(PAHAvatarStory, Meta);
describe('PAHAvatar', () => {
  beforeEach(() => {
    // 在每个测试开始前 mock
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it('renders the component with given props', () => {
    render(<PAHAvatarComponent {...PAHAvatarComponent.args} />); // 使用从 story 中获取的 args 渲染组件
    // 如果你的组件还显示其他内容，请添加更多的断言来检查它们是否正确渲染
  });

  // 如果你的组件在同的 props 下有不同的行为，你可以添加更多的测试用例来覆盖这些场景
});
