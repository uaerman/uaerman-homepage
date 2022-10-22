module.exports = {
  apps : [{
    name: 'homepage',
    script: 'app.js',
    watch: true,
    instances: 1,
    max_memory_restart: '1G'
  }]
}