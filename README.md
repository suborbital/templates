# Runnable Templates

This repo is the basis for creating your own Runnable templates for Reactr, Atmo, and Suborbital Compute. JavaScript, TypeScript, AssemblyScript, Rust, and TinyGo are best supported.

To get started, fork this repo into your own organization. It must be public.

## Directory structure
Runnable templates are kept within the `templates` directory. Any subdirectory of `templates` that contains a `.runnable.yaml` file is considered a template.

### `.runnable.yaml`
Only contains a single line that indicates the language of the template.
```yaml
lang: tinygo
```

Both of these directory structures are valid:

These templates would be referred to as `tinygo/hello` and `tinygo/handler`.
```
tinygo
├── handler
│   ├── .runnable.yaml
│   ├── go.mod.tmpl
│   ├── handler.go.tmpl
│   └── main.go.tmpl
└── hello
    ├── .runnable.yaml
    ├── go.mod.tmpl
    └── main.go.tmpl
```

This template would be referred to as `example/deep/directory/hello`.
```
example
└── deep
    └── directory
        └── hello
            ├── .runnable.yaml
            ├── go.mod.tmpl
            └── main.go.tmpl
```

This repository sorts templates by language, but that isn't a hard requirement. 


## Custom AssemblyScript libraries
Edit `templates/assemblyscript/src/custom.ts` and `templates/assemblyscript/src/lib.ts` to change the template that will be used to create new Runnables. If you're a Subprbotal Compute user, `lib.ts` is what will be used for all new functions when your users access the code editor.

Optionally, if you'd like to provide a custom wrapper around the Suborbital core library (i.e. allow your users to import `@acmeco/acmeco` instead of `@suborbital/suborbital`), then edit `library/assemblyscript/package.json` to replace all instances of `acmeco` with your desired name, and then publish the library to NPM. Add your custom library as an import in `templates/assemblyscript/package.json.tmpl` so your custom Runnables can use it.
