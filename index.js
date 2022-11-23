var os = require('os')
var path = require('path')

var platform = os.platform()

//patch for compatibility with electron-builder, for smart built process.
if(platform == "darwin"){
	platform = "mac";
}else if(platform == "win32"){
	platform = "win";
}
//adding browser, for use case when module is bundled using browserify. and added to html using src.
if (platform !== 'linux' && platform !== 'mac' && platform !== 'win' && platform !=="browser") {
  console.error('Unsupported platform.', platform);
  process.exit(1)
}

var arch = os.arch()
if (platform === 'mac' && (arch !== 'x64' &&  arch !== 'arm64' )) {
  console.error('Unsupported architecture.')
  process.exit(1)
}
if (arch === 'ia32' ) {
  console.error('Unsupported architecture.')
  process.exit(1)
} else if(arch === 'arm64'){
  arch = 'x64'
}

var ffmpegPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win' ? 'ffmpeg.exe' : 'ffmpeg'
)

exports.path = ffmpegPath;
