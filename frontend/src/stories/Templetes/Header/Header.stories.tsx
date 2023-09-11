import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../../components/layout/Header';

/**
 * 모먼트에서 사용하는 기본적인 헤더입니다.
 */

const meta: Meta<typeof Header> = {
  title: 'Templates/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
