# Types of props:
1) String
2) Number
3) Boolean
4) Array
5) Object
6) Function 
7) Children (JSX)

# Props        &&            States
 Read only                   Mutable
 Parent->Child               Managed inside component
 

# useEffect => it is a hook that  let's you run side effects in functional components.
side effects = things that happen outside normal rendering like:
                * fetching API data
                * setting timers
                * Accessing DOM
                * Adding Event Listeners
                * updating document title
# why we use useEffect
* Re-render when state/props change
* but side effect should not run during rendring.
* so react gives us useEffect to handle them after render

## What are the Rules of JSX