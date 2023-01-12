starter app was built using
```
ionic start ionic-starter-app tabs --type="react"
```

### Reproduce 

1. install dependencies (so eslint and prettier will work)
```
npm install
```
2. Go to `src/pages/Tab1.tsx`, note the use of `HTMLIonModalElement` (as seen within the docs: https://ionicframework.com/docs/api/modal)

3. Run ionic app
```
ionic serve
```

4. Error is encountered
```
Compiled with problems:X

ERROR

[eslint] 
src/pages/Tab1.tsx
  Line 15:30:  'HTMLIonModalElement' is not defined  no-undef
```