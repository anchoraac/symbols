export default {
  multipass: true,
  js2svg: { pretty: true, indent: 2 },
  plugins: [
    "preset-default",
    {
      name: "removeDimensions",
      active: false
    },
    {
      name: "removeViewBox",
      active: false
    }
  ]
};
