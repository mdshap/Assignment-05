1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used to get a specific element from DOM by its id as id is unique for every element. 

getElementsByClassName is used to get a group of HTML collection (get return) that are sharing the same class. It is returned as an array like collection (but not exactly an array). We call it Nodelist.

querySelector is used to collect only the first element that is matching a css selector. Those elements can be class name, id, element name(example: h1, div, button) etc.

querySelectorAll is used to collect all the elements that is matching a css class/id/element. It returns an array like object (nodelist) but not actually an array.




2. How do you create and insert a new element into the DOM?

Ans: I can create a new element in DOM using 'document.createElement()'.
To insert the created element in a container, I can use append() or appendChild(). 
Example: document.getElementById("container-id").appendChild('new element')
If i use 'prepend()' it will add the new element at the beginning.



3. What is Event Bubbling and how does it work?

Ans: Event bubbling is the process of sending the information of an event (like click and others) from a child to its parent, then to its grandparent and proceeding this way, finally to the document.




4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is the process of attaching a event listener to a parent instead of putting separate event listeners for every child. Using this, the parent element helps to handle the events of its childs.

The main use of it is when any new element is dynamically added, it does not to add an event listener. It also save the storage because we do not need to write same type of code again and again




5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Sometimes clicking a link opens a new page, or a submit button reloads the whole page. To prevent these, preventDefault( ) is used that blocks the browser from opening a new page or reloading the page. 
Example: If there is any button inside a form, it is by default considered as a submit button and clicking on it reloads the page. We can solve these problems using preventDefault( )

Sometimes, we have a button inside another element, like a div. Clicking the button usually also triggers the click event of the parent element. This happens because of event bubbling. To stop this, we use stopPropagation()


