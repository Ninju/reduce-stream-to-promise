module.exports = function(combine, initialValue, aStream) {
    return new Promise((resolve, reject) => {
          let accumulatedValue = initialValue

          aStream.on('data', (data) => {
                  accumulatedValue = combine(accumulatedValue, data)
                })  

        aStream.on('end', () => resolve(accumulatedValue))
          aStream.on('error', () => reject())
        })  
}
