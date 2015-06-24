# Tab Number
### What? Why?
So. I installed the [tab number](https://chrome.google.com/webstore/detail/tab-number/dnndfognablbihihgnilabcegjjkiekj) plugin for Chrome. Cool. Great.
But it had this annoying bug when you got to double-digits: the number would
repeat, like `10. 10. 10. 10. 10. 10. 10. Home - Waffle House`. This will not do.

So I crack open vim and I take a look at the source, and I see the code that strips
the old number off the title goes a little something like:

```javascript
  // hax
  if (title && title.indexOf('. ') == 1) {
    title = title.substr(3);
  }
```

i.e. the old number gets sliced off iff the second character is a period. But for
double-digits, this falls on its face: the period will be at index 2, and the title
surgery would need to be `title = title.substr(4)`. Luckily, [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
are a thing that exists!

### Wait, How Do I Install This Bad Non-Gendered Youth?
[I'm glad you asked!](https://developer.chrome.com/extensions/getstarted#unpacked)

### But Isn't [insert tab numbering Chrome extension] Better Anyway?
Maybe! Probably? If you have a favorite that works super well and doesn't do shit
like shoehorn numbers in even though why would you ever <modifier-click> on a dang
bookmark, anyway, what is that?, then by all means open an issue. You'll probably
convince me and then I'll give you a high-five.
