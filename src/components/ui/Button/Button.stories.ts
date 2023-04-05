import Button from "./Button.vue";

export default {
    component: Button,
    title: 'Button',
}

const Template = (args: unknown) => ({
    components: { Button },
    template: '<Button ...args />',
})

export const Default = Template.bind({
})
Default.args = {
    label: 'Button'
}

export const Outlined = Template.bind({
})
Outlined.args = {
    label: 'Button',
    outlined: true,
}

export const Small = Template.bind({
})
Small.args = {
    label: 'Button',
    small: true
}

export const SmallOutlined = Template.bind({
})
SmallOutlined.args = {
    label: 'Button',
    small: true,
    outlined: true,
}