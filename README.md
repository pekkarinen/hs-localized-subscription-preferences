# hs-localized-subscription-preferences
JS kludge to localize Hubspot email subscription preference system pages

NB. You need to add `?languagePreference={{ content.language.languageTag[0:2] }}`
to `unsubscribe_link_all` token in order to render in users language (though we substring
the languagePreference query var anyway but hey) ie. you need to whip up a custom footer for your e-mails

The backup unsubscribe page does not receive any query vars so we are SOL there.

**Have a nice day, the computer is your friend**
