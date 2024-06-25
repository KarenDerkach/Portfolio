const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is a function before proceeding
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the 'web-vitals' library
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Call each web vitals function with the provided callback
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      })
      .catch((error) => {
        // Handle any errors that occur during the import
        console.error('Error importing web-vitals:', error)
      })
  }
}

export default reportWebVitals
