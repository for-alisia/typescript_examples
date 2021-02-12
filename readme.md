# TypeScript Projects (examples)

1. ### Basics (basics folder)

- Basic syntax snippets of TypeScript. Contains basic examples of using: types and interfaces, classes, decorators, generics, type guards, intersection types, descriminated union, type casting, index properties, tuples, metadata, functions overload, optional chaining, nullish coalescing, unknown and never types.

---

2. ### Maps (maps folder and share folder)

- Simple application renders 2 random points on the Google Map with random coordinates (2 different classes were used). To get random coordinates and companies I use Faker library.
  The second small example - app, where you can entered the address and the google map will be rendered in the container. Created without class-based approach.

3. ### Sorting (sort folder)

- Examples of sorting characters collection, number collection and linked list, based on the common sorting class

4. ### Statistic (stats folder)

- Application providing different statistic about SCV file (football matches in this example). Input and output can be easily changed.

5. ### Drag and Drop Project Manager (dragNdrop folder)

- Simple class-based application, that allows to create project and drag and drop it to Active list or Finished list. There are diffrenet abstaract classes for a component and a state. State management uses a singleton concept. Uses webpack as a bundler.

![project-preview](screens/dragNdrop.screen.png)

6. ### Web framework (web folder)

- Simple version of web framework (model, views). In this example renders the list of the users from the server and allows to edit and save their data. There are abstract classes for models (Model, Collection) and views (View, CollectionView). It's possible to create custom classes, based on abstract ones and render them into the DOM, react on changing of the models and re-render the element. Use Parcel to bundle the project.

7. ### Express-server (server folder)

- Simple express server allows user to login in and logout. Developed using classes and decorators. Created decorators for methods (get, post, put, delete, patch), for middlewares, controller decorator for the controller class, that gather all different decorators applied to all methods in the class. For transferring data reflect-metadata was used. Router made using singleton.

```javascript
@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`Some response`);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    'some code here';
  }
}
```

8. ### Simple React ToDo with TS (react_2 folder)

- Basic React Todo App, created using TypeScript template.

![project-preview](screens/react_todo.screen.png)

9. ### React + Redux (rrts folder)

- Simple React todo-project with Redux and Thunk. Just a try with TypeScript and very basic functionality.
