// `./myOwnTheme.js`
const TInput = {
    // Notice that this will override the full `baseClass` setting so probably you want to keep some
    // of the clases and just replace the ones you want to override.
    // baseClass: 'border block w-full rounded',
    // baseClass: 'border-2 border-blue-500 block w-full rounded',
    baseClass: 'border block rounded',
    defaultStatusClass: 'bg-white',
    warningStatusClass: 'border-yellow-400 bg-yellow-100',
    errorStatusClass: 'border-red-300 bg-red-100',
    successStatusClass: 'border-green-300 bg-green-100',
    disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
    defaultSizeClass: 'p-3',
    largeSizeClass: 'p-4 text-lg',
    smallSizeClass: 'p-2 text-sm',
  }
  
  const TButton = {
    // baseClass: 'border block rounded inline-flex items-center justify-center',
    baseClass: 'rounded-lg border block inline-flex items-center justify-center',
    // primaryClass: 'text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600',
    primaryClass: 'text-white bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600',
  }
  
  const MyOwnTheme = {
    TInput,
    TButton,
  }
  
  export default MyOwnTheme