const { VueLoaderPlugin } = require('vue-loader')

const path = require('path');
const glob = require('glob');
const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files; ', files);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        console.log('component; ', component);
        list[component] = `./${file}`;
    }
    console.log(list);

}

makeList('components/lib', list);

module.exports = {
    entry: list,
    mode: "development",
    output: {
        filename: '[name].umd.js',
        //使用绝对路径，找到文件夹
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),//这个会报错不知道为什么
        // new webpack.BannerPlugin("最终版权归'cw'所有"),
        // new HtmlWebpackPlugin({
        //     template: 'index.html'
        // })
    ],
    //一些loader
    module: {
        rules: [

            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            },


        ],
    },
};

