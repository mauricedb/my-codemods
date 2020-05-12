# my-codemods

Using [jscodeshift codemods](https://github.com/facebook/jscodeshift)

## Add defined() to all your [Yup](https://github.com/jquense/yup) schemas

```
npx jscodeshift -t https://raw.githubusercontent.com/mauricedb/my-codemods/master/transforms/yup-add-defined.js --extensions ts src
```
