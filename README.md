# quokka-plugin-sharp-pad-react

In your quokka configuration, you need to specify the plugins in this order:

```
"plugins": [
  "quokka-plugin-sharp-pad-react",
  "quokka-plugin-sharp-pad"
]
```

Otherwise ReactDOM will complain about some prototype injections that the plugins do.

After you get it to run you are free to dump react components to your output. You do not need to put React in scope because the plugin already defines it as a global.

```js
dump(<div>Hello World!</div>)
```
