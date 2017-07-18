const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  },
  exportPathMap: () => ({
    "/": { page: "/" }
  })
}


// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   // "/about": { page: "/about" },
//   // "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
//   // "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
//   // "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } }
// })
//
// const fetch = require('isomorphic-fetch')
//
// module.exports = {
//   async exportPathMap () {
//     // we fetch our list of posts, this allow us to dynamically generate the exported pages
//     const response = await fetch('http://jsonplaceholder.typicode.com/posts?_page=1')
//     const postList = await response.json()
//
//     // tranform the list of posts into a map of pages with the pathname `/post/:id`
//     const pages = postList.reduce(
//       (pages, post) =>
//         Object.assign({}, pages, {
//           [`/post/${post.id}`]: {
//             page: '/post',
//             query: { id: post.id }
//           }
//         }),
//       {},
//     )
//
//     // combine the map of post pages with the home
//     return Object.assign({}, pages, {
//       '/': { page: '/' }
//     })
//   }
// }
