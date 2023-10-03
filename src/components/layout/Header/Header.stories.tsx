import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

/**
 * 모먼트에서 사용하는 기본적인 헤더입니다.
 */

const meta: Meta<typeof Header> = {
  title: 'Templates/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'mobile',
    breakpoints: {
      breakpointNames: {
        small: '0',
        medium: '376',
        large: '1000',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
