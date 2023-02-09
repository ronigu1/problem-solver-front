# problem-solver-front

Plan and implement a simple Form page, which asks the user details about his problem,
the serial number of his device and the status of the lights on his device, and then
returns a response accordingly (response status).

Server side:

A logic service will calculate the "response status" message according to the logic:

  ○ If serial number starts with 24-X -> “please upgrade your device”
  
  ○ If serial number stats with 36-X
  
    ■ If all indicators are off -> “turn on the device”
    ■ If any 2 indicators are blinking -> “Please wait”
    ■ If all indicators are on -> “ALL is ok”
    
  ○ If serial number starts with 51-B
  
    ■ If all indicators are off -> “turn on the device”
    ■ If even 1indicator is blinking -> “Please wait”
    ■ If more than 1 indicator is on (and others are off) -> “ALL is ok”
    
  ○ If serial number is a number
  
    ■ Print “Bad serial number”
    ■ TBD (in 2nd interview)
    
  ○ Else
  
    ■ “Unknown device”

● Save the following into a relational data table (using SQLITE)

  ○ The form input data
  ○ the current date time
  ○ the response status




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
