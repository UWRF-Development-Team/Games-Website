import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
/*===========================-Overview-For-Spring-============================
 * RestController: A Spring MVC annotation that specializes in building APIs.
 * Component: A Spring annotation that marks a Java class as a building block.
 * Service: A Spring annotation that marks a Java class as a task provider.
 * EventListener: A Spring annotation that handles events in Spring.
 * RequestMapping: A Spring annotation that maps a URL to a method.
 * PathVariable: A Spring annotation that gets a variable from a URL.
 * RequestParam: A Spring annotation that gets a variable from a URL when a
 *               certain a certain type of request is received.
 * RequestBody: A Spring annotation that gets a variable from a request body.
 * RequestHeader: A Spring annotation that gets a variable from a request
 *                header.
 * ModelAttribute: A Spring annotation that gets a variable from a model.
 * SessionAttribute: A Spring annotation that gets a variable from a session.
 * CookieValue: A Spring annotation that gets a variable from a cookie.
----------------------------------------------------------------------------*/
/*===========================-Overview-For-Spring-============================
 * @SpringBootApplication: Starting point of the application.                |
 * - Class -------------------------------------------------------------------
 * @RestController: Specializes in building APIs.                            |
 * - Class, Method -----------------------------------------------------------
 * @Component: Marks a Java class as a building block.                       |
 * - Class ------------------------------------------------------------------|
 * @Service: Marks a Java class as a task provider.                          |
 * - Class ------------------------------------------------------------------|
 * @Controller: Handles requests by returning data as responses.             |
 * - Class, Method ----------------------------------------------------------|
 * @EventListener: Handles events in Spring.                                 |
 * - Method -----------------------------------------------------------------|
 * @RequestMapping: Maps a URL to a method.                                  |
 * - Class, Method ----------------------------------------------------------|
 * @PathVariable: Gets a variable from a URL.                                |
 * - Method -----------------------------------------------------------------|
 * @RequestParam: Gets a variable from a URL when a certain type of request  |
 *                is received.                                               |
 * - Method, Variable/Parameter ---------------------------------------------|
 * @RequestBody: Gets a variable from a request body.                        |
 * - Method, Parameter ------------------------------------------------------|
 * @RequestHeader: Gets a variable from a request header.                    |
 * - Method, Parameter ------------------------------------------------------|
 * @ModelAttribute: Gets a variable from a model -- data based on the app's  |
 *                  state.                                                   |
 * - Method, Parameter ------------------------------------------------------|
 * @SessionAttribute: Gets a variable from a session.                        |
 * - Method, Parameter ------------------------------------------------------|
 * @CookieValue: Gets a variable from a cookie.                              |
 * - Method, Parameter ------------------------------------------------------|
----------------------------------------------------------------------------*/

//===========================-Reference-For-Spring-===========================
// Generated and fact-checked by ChatGPT. Verify the information elsewhere if
// there are any issues with the explanations. They should provide a good
// starting point for learning about Spring syntax.
//----------------------------------------------------------------------------
// @SpringBootApplication -- commented out to prevent errors.
/*---------------------------------Excerpt------------------------------------
 * @SpringBootApplication is a Spring annotation that tells Spring that this
 * class is the starting point of the application. It's a way to tell Spring
 * that this class is the main class. Use this annotation when you want to
 * tell Spring that this class is the main class or where you will boot your
 * application from. In a general sense, this annotation is used to tell
 * Spring that this the booting class.
----------------------------------------------------------------------------*/
@RestController
/*---------------------------------Excerpt------------------------------------
 * @RestController is a Spring MVC annotation that specializes in building
 * APIs. It's an extension of @Controller designed for RESTful APIs, directly
 * returning data as responses. This simplifies handling requests and
 * providing structured data, like JSON, to clients such as mobile apps or
 * web frontends. It's a concise way to handle incoming requests and deliver
 * information without extra steps.In a general sense, a controller class in a
 * Spring MVC application is responsible for serving client requests and
 * preparing a model which can generate the output representation.
----------------------------------------------------------------------------*/
@Component
/*---------------------------------Excerpt------------------------------------
 * @Component marks a Java class as a building block in Spring. These beans
 * are managed by Spring, like pieces in a puzzle. They provide services,
 * such as connecting to databases. It's a way to tell Spring that this class
 * plays a special role and should be used where needed.
----------------------------------------------------------------------------*/
@Service
/*---------------------------------Excerpt------------------------------------
 * @Service is marker for any class that's providing a service. An example of
 * a service is a class that connects to a database. It's a way to tell Spring
 * that this class plays a special role and should be used where needed. When
 * Spring sees an @Service annotation, it knows to treat it as a service which
 * means it is able to be manipulated by the Spring framework to perform tasks
 * like counting the number of entries in a database table. In a general
 * sense, a service class in a Spring MVC application is responsible for
 * processing logic which can include database access, calculations, and
 * algorithms. Use it for any class that's providing an element of
 * functionality.
----------------------------------------------------------------------------*/
@Controller
/*---------------------------------Excerpt------------------------------------
 * @Controller is a Spring MVC annotation that handles requests. It's a way to
 * tell Spring that this class should be used to handle requests. Use this
 * annotation when you want to tell Spring that this class should be used to
 * handle requests. In a general sense, a controller class in a Spring MVC
 * application is responsible for serving client requests and preparing a
 * model which can generate the output representation.
----------------------------------------------------------------------------*/
public class DeveloperNotes {
    @EventListener
    public void exampleEvent() {
    }

    /*--------------------------------Excerpt---------------------------------
     * @EventListener is used to handle events in Spring. It's a way to tell
     * Spring that this method should be called when an event is fired. Events
     * are a way to communicate between different parts of an application.
     * Some common events are when a user clicks a button or when a database
     * entry is updated. You should use an event listener when you want to
     * perform an action when an event happens. In a general sense, an event
     * is like a notification that something has happened and has the
     * capability to trigger a response.
     -----------------------------------------------------------------------*/
    @RequestMapping("/rest_mapping")
    public void exampleMapping() {
    }
    /*--------------------------------Excerpt---------------------------------
     * @RequestMapping is used to map a URL to a method. It's a way to tell
     * Spring that this method should be called when a certain URL is visited.
     * You should use a request mapping when you want to perform an action
     * when a certain URL is visited. In a general sense, a request mapping is
     * like a notification that a certain URL has been visited and has the
     * capability to trigger a response.
     -----------------------------------------------------------------------*/
    // @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
    /*--------------------------------Excerpt---------------------------------
     * @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping are
     * specialized versions of @RequestMapping. They handle GET, POST, PUT,
        * and DELETE requests respectively. They're a way to tell Spring that
        * this method should be called when a certain type of request is
        * received. You should use a request mapping when you want to perform
        * an action when a certain type of request is received. In a general
        * sense, a request mapping is like a notification that a certain type
        * of request has been received and has the capability to trigger a
        * response.
     -----------------------------------------------------------------------*/
    // @PathVariable
    String examplePathVariable(@PathVariable String example) {
        return example;
    }

    /*--------------------------------Excerpt---------------------------------
     * @PathVariable is used to get a variable from a URL. It's a way to tell
     * Spring that this method should be called when a certain URL is visited
     * and that it should pass a variable from the URL to the method. You
     * should use a path variable when you want to perform an action when a
     * certain URL is visited and you want to pass a variable from the URL to
     * the method. In a general sense, a path variable is like a notification
     * that a certain URL has been visited and has the capability to trigger a
     * response and pass a variable from the URL to the method.
     -----------------------------------------------------------------------*/
    // @RequestParam
    String exampleRequestParam(@RequestParam String example) {
        return example;
    }

    /*--------------------------------Excerpt---------------------------------
     * @RequestParam is used to get a variable from a URL. It's a way to tell
     * Spring that this method should be called when a certain URL is visited
     * and that it should pass a variable from the URL to the method. You
     * should use a request parameter when you want to perform an action when
     * a certain URL is visited and you want to pass a variable from the URL
     * to the method. In a general sense, a request parameter is like a
     * notification that a certain URL has been visited and has the capability
     * to trigger a response and pass a variable from the URL to the method.
     -----------------------------------------------------------------------*/
    // @RequestBody
    String exampleRequestBody(@RequestBody String example) {
        return example;
    }

    /*--------------------------------Excerpt---------------------------------
     * @RequestBody is used to get a variable from a request body. It's a way
     * to tell Spring that this method should be called when a certain type of
     * request is received and that it should pass a variable from the request
     * body to the method. You should use a request body when you want to
     * perform an action when a certain type of request is received and you
     * want to pass a variable from the request body to the method. In a
     * general sense, a request body is like a notification that a certain
     * type of request has been received and has the capability to trigger a
     * response and pass a variable from the request body to the method.
     -----------------------------------------------------------------------*/
    // @RequestHeader
    String exampleRequestHeader(@RequestHeader String example) {
        return example;
    }

    /*--------------------------------Excerpt---------------------------------
     * @RequestHeader is used to get a variable from a request header. It's a
     * way to tell Spring that this method should be called when a certain
     * type of request is received and that it should pass a variable from the
     * request header to the method. You should use a request header when you
     * want to perform an action when a certain type of request is received
     * and you want to pass a variable from the request header to the method.
     * In a general sense, a request header is like a notification that a
     * certain type of request has been received and has the capability to
     * trigger a response and pass a variable from the request header to the
     * method.
     -----------------------------------------------------------------------*/
    @ModelAttribute
    String exampleModelAttribute(@ModelAttribute String example) {
        return example;
    }
    /*--------------------------------Excerpt---------------------------------
     * @ModelAttribute is used to get a variable from a model. In this
     * context, a model is a Java object that contains data and can be passed
     * between methods to perform action based on the application's state.
     * Some examples of models are a user inputting data into a form or a
     * database entry. It's a way to tell Spring that this method should be
     * called when a certain type of model is received and that it should pass
     * a variable from the model to the method. You should use a model
     * attribute when you want to perform an action when a certain type of
     * model is received and you want to pass a variable from the model to the
     * method. In a general sense, a model attribute is like a notification
     * that a certain type of model has been received and has the capability
     * to trigger a response and pass a variable from the model to the method.
     -----------------------------------------------------------------------*/
    // @SessionAttribute
    String exampleSessionAttribute(@SessionAttribute String example) {
        return example;
    }
    /*--------------------------------Excerpt---------------------------------
     * @SessionAttribute is used to get a variable from a session. In this
     * context, a session is a Java object that contains data and can be
     * passed between methods to perform action based on the application's
     * state. Some examples of sessions are a user inputting data into a form
     * or a database entry. It's a way to tell Spring that this method should
     * be called when a certain type of session is received and that it should
     * pass a variable from the session to the method. You should use a
     * session attribute when you want to perform an action when a certain
     * type of session is received and you want to pass a variable from the
     * session to the method. In a general sense, a session attribute is like
     * a notification that a certain type of session has been received and has
     * the capability to trigger a response and pass a variable from the
     * session to the method.
     -----------------------------------------------------------------------*/
    // @CookieValue
    String exampleCookieValue(@CookieValue String example) {
        return example;
    }
    /*--------------------------------Excerpt---------------------------------
     * @CookieValue is used to get a variable from a cookie. In this context,
     * a cookie is a Java object that contains data and can be passed between
     * methods to perform action based on the application's state. Some
     * examples of cookies are a user's login information, location, language,
     * or preferences. It's a way to tell Spring that this method should be
     * called when a certain type of cookie is received and that it should
     * pass a variable from the cookie to the method. You should use a cookie
     * value when you want to perform an action when a certain type of cookie
     * is received and you want to pass a variable from the cookie to the
     * method. In a general sense, a cookie value is like a notification that
     * a certain type of cookie has been received and has the capability to
     * trigger a response and pass a variable from the cookie to the method.
     * ---------------------------------------------------------------------*/

}