
module.exports = {
  devServer: {
    port: 5544,
    proxy: {
      '/api': {
        target: 'https://moonlit-genie-cdeca8.netlify.app/db.json/db.json', 
        changeOrigin: true,
      },
    },
  },
};
