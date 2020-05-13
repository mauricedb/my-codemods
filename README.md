# my-codemods

Using [jscodeshift codemods](https://github.com/facebook/jscodeshift)

## Before you begin
```
npm install jscodeshift -g
```

## Add defined() to all your [Yup](https://github.com/jquense/yup) schemas

```
jscodeshift -t https://raw.githubusercontent.com/mauricedb/my-codemods/master/transforms/yup-add-defined.js --extensions ts src
```
