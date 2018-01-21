function changeText(num) {
    var text = document.getElementById("display");
    switch(num) {
      // Attribution goes to: https://www.lipsum.com/feed/html
      case 1:
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo ";
      text += "sapien eget orci volutpat molestie. Donec aliquet maximus purus, quis ";
      text += "tincidunt lacus vestibulum in. Quisque venenatis tincidunt ante, quis ";
      text += "tincidunt lorem finibus quis. Ut ut quam ipsum. Vestibulum consectetur ";
      text += "tristique ex, non pulvinar erat fringilla eu. Lorem ipsum dolor sit amet, ";
      text += "consectetur adipiscing elit.\n\n";
      text += "Suspendisse dapibus felis ultricies ante porttitor, a fermentum magna ";
      text += "bibendum. Ut interdum nec neque id rhoncus. Vestibulum dignissim convallis ";
      text += "erat, at ultricies risus porta ac. Quisque sagittis luctus nulla. Morbi ";
      text += "suscipit, velit in rutrum interdum, arcu tortor posuere turpis, ut ";
      text += "fermentum erat ipsum in metus. Donec et lorem est.\n\n";
      text += "Mauris consectetur tincidunt neque, ut ultricies velit suscipit sit amet. ";
      text += "Donec aliquam leo in dolor semper, et posuere nulla accumsan. Donec justo ";
      text += "eros, congue in ligula ac, tempus imperdiet ipsum. Sed turpis dolor, mollis ";
      text += "nec enim ut, lobortis molestie ligula. Nulla leo ligula, sagittis et ex ";
      text += "eget, fringilla luctus massa. Sed id porta magna.\n\n";
      text += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at suscipit ";
      text += "nisl. Nullam viverra enim orci. Suspendisse convallis tempor ligula, at ";
      text += "pharetra arcu. Nunc lobortis sit amet felis a interdum. Nulla ullamcorper ";
      text += "tempus massa, in vehicula arcu tristique vitae. Vivamus in elit tempus, ";
      text += "posuere ipsum id, finibus nulla.\n";
      break;
      // Attribution goes to: https://www.99-bottles-of-beer.net/lyrics.html
      case 2:
      text = "99 bottles of beer on the wall, 99 bottles of beer.\n";
      text += "Take one down and pass it around, 98 bottles of beer on the wall.\n\n";
      text += "98 bottles of beer on the wall, 98 bottles of beer.\n";
      text += "Take one down and pass it around, 97 bottles of beer on the wall.\n\n";
      text += "97 bottles of beer on the wall, 97 bottles of beer.\n";
      text += "Take one down and pass it around, 96 bottles of beer on the wall.\n\n";
      text += "96 bottles of beer on the wall, 96 bottles of beer.\n";
      text += "Take one down and pass it around, 95 bottles of beer on the wall.\n\n";
      break;
      case 3:
      text = "this is the third thing";
    }
    document.getElementById('display').innerText = text;
}
