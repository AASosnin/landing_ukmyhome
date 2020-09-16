// ! Поставит bable для преобразования ES6 для старых браузеров

// подключение плагинов и присваивание их в переменные
const { src, dest } = require('gulp'),
gulp = require('gulp'),
browsersync = require('browser-sync').create(),
fileinclude = require('gulp-file-include'),
del = require('del'),
scss = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
groupMedia = require('gulp-group-css-media-queries'),
cleanCss = require('gulp-clean-css'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify-es').default,
imagemin = require('gulp-imagemin'),
webp = require('gulp-webp'),
webphtml = require('gulp-webp-html'),
webpcss = require('gulp-webp-css'),
svgSprite = require('gulp-svg-sprite'),
ttf2woff = require('gulp-ttf2woff'),
ttf2woff2 = require('gulp-ttf2woff2'),
fonter = require('gulp-fonter');

// основные папки проекта
const project_folder = "dist";
const source_folder = "#src";

//? Доступ к файлсистем для подключения шрифтов
// const fs = require('fs');

// пути к папкам и файлам
const path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/style.scss",
    js: source_folder + "/js/script.js",
    img: source_folder + "/img/**/*.{jpg, svg, png, gif, ico, webp}",
    fonts: source_folder + "/fonts/*.ttf",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg, svg, png, gif, ico, webp}",
  },
  clean: "./" + project_folder + "/",
}

// использование плагина (запускает проект в браузере)
function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3000,
    notify: false,
  })
}

// функция для сборки html
function html() {
  return src(path.src.html) // путь к папке с исходниками html
  .pipe(fileinclude()) //собирает все файлы в один index.html
  .pipe(webphtml()) //Берет из функции image webp и подставляет их вместо стандартных img в html
  .pipe(dest(path.build.html)) //собирает проект
  .pipe(browsersync.stream()) //синхронизирует проект с локалхостом
}

// функция для сборки css
function css() {
  return src(path.src.css) // путь к папке с исходниками css
  .pipe(
    scss({ //scss -> css
      outputStyle: "expanded",

    })
  )
  .pipe(webpcss())
  .pipe(
    groupMedia() //группирует медиазапросы
  )
  .pipe(
    autoprefixer({ //добавляет вендерные префиксы
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    })
  )

  .pipe(dest(path.build.css)) //собирает файл в билд
  .pipe(
    cleanCss() //сжимает в min.css
  )
  .pipe(
    rename({
      extname: ".min.css"
    })
  )
  .pipe(dest(path.build.css)) //собирает сжатый файл в билд
  .pipe(browsersync.stream()) //синхронизирует проект с локалхостом
}

// функция для сборки js
function js() {
  return src(path.src.js) // путь к папке с исходниками js
  .pipe(fileinclude()) //собирает все файлы в один index.js
  .pipe(dest(path.build.js)) //собирает проект
  .pipe(uglify()) //сжимает js
  .pipe(
    rename({
      extname: ".min.js"
    })
  )
  .pipe(dest(path.build.js)) //собирает проект
  .pipe(browsersync.stream()) //синхронизирует проект с локалхостом
}

// Функция для сборки изображений и их модификации
function images() {
  return src(path.src.img) // путь к папке с исходниками html
  .pipe(
    webp({
      quality: 70
    })
  )
  .pipe(dest(path.build.img))
  .pipe(src(path.src.img))
  .pipe(
    imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interLaced: true,
      optimizationLevel: 3 //0 to 7
    })
  )
  .pipe(dest(path.build.img)) //собирает проект
  .pipe(browsersync.stream()) //синхронизирует проект с локалхостом
}

// Функция для сборки и обработки шрифтов
function fonts(params) {
  src(path.src.fonts)
  .pipe(ttf2woff())
  .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
  .pipe(ttf2woff2())
  .pipe(dest(path.build.fonts))
}

//? Создание спрайтов, можно отключить, если не используется
gulp.task('svgSprite', function() {
  return gulp.src([source_folder + '/iconsprite/*.svg'])
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../icons/icons.svg", //sprite file name
        example: false //Если включить, будет папка с html примерами иконок, котрые можно копировать в основной html
      }
    }
  }))
  .pipe(dest(path.build.img))
})

//? Для обработки .otf файлов шрифтов
gulp.task('otf2ttf', function() {
  return src(source_folder + '/fonts/*.otf')
  .pipe(fonter({
    formats: ['ttf']
  }))
})

//? Автоматизация подключения шрифтов (Если надо, дописать)
// function fontsStyle(params) {}
// function cb() {}

// синхронизация изменений в коде и запущенном проекте
function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

// удаляет папку dist перед сборкой проекта
function clean(params) {
  return del(path.clean)
}

const build = gulp.series(clean, gulp.parallel(js, css, html, images)); //сборка проекта
const watch = gulp.parallel(build, watchFiles, browserSync); //запуск собранного проекта в режиме dev

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;