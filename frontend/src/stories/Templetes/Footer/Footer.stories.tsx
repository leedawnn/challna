import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../../../components/layout/Footer';

/**
 * 모먼트에서 사용하는 기본적인 푸터입니다.
 */

const meta: Meta<typeof Footer> = {
  title: 'Templates/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};
