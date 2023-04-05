import Avatar from "./Avatar.vue";

export default {
    component: Avatar,
    title: 'Avatar',
}

const Template = () => ({
    components: { Avatar },
    template: '<Avatar image="https://i.pravatar.cc/300" />',
});

export const Default = Template.bind({});