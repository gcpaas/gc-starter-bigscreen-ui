cd ./src/views/bigScreen/components
# 如果没有node_modules 则 安装依赖
if [ ! -d "node_modules" ]; then
  echo '开始安装依赖'
  npm install --registry=http://registry.npmmirror.com
  echo '安装依赖完毕'
  echo '开始打包'
  npm run lib
  echo '打包完毕'
  # 开始发布
  echo '开始发布'
  npm publish
  echo '发布完毕'
fi

# 如果有node_modules 则 直接打包上传
if [ -d "node_modules" ]; then
  echo '开始打包'
  npm run lib
  echo '打包完毕'
    # 开始发布
  echo '开始发布'
  npm publish
  echo '发布完毕'
fi

cd ../../../


