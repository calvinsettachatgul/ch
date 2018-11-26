// https://www.interviewcake.com/question/javascript/js-whats-wrong
//We're building a web game where everybody wins and we are all friends forever.
/*

It's simple—you click on one of three boxes to see what nice thing you've won. You always win something nice. Because we love you.

Here's what we have so far. Something's going wrong though. Can you tell what it is?

  <button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>
HTML
The syntax is just fine—the problem is some unexpected behavior. 

//
//this is not really an algorithm problem 

*/
