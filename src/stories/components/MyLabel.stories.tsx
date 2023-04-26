import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        size: 'normal',
        allCaps: false,
    },
};

export const AllCaps: Story = {
    args: {
        size: 'normal',
        allCaps: true,
    },
};

export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',
    },
};

export const CustomFontColor: Story = {
    args: {
        size: 'h1',
        fontColor: '#5507ac',
    },
};
