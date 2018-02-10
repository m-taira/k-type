
require 'active_support'
require 'active_support/core_ext'
CHAR_MAP = {
  'あ': 'A',
  'い': 'I',
  'う': 'U',
  'え': 'E',
  'お': 'O',
  'か': 'KA',
  'き': 'KI',
  'く': 'KU',
  'け': 'KE',
  'こ': 'KO',
  'さ': 'SA',
  'し': 'SI',
  'す': 'SU',
  'せ': 'SE',
  'そ': 'SO',
  'た': 'TA',
  'ち': 'TI',
  'つ': 'TU',
  'て': 'TE',
  'と': 'TO',
  'な': 'NA',
  'に': 'NI',
  'ぬ': 'NU',
  'ね': 'NE',
  'の': 'NO',
  'は': 'HA',
  'ひ': 'HI',
  'ふ': 'HU',
  'へ': 'HE',
  'ほ': 'HO',
  'ま': 'MA',
  'み': 'MI',
  'む': 'MU',
  'め': 'ME',
  'も': 'MO',
  'や': 'YA',
  'ゆ': 'YU',
  'よ': 'YO',
  'ら': 'RA',
  'り': 'RI',
  'る': 'RU',
  'れ': 'RE',
  'ろ': 'RO',
  'わ': 'WA',
  'を': 'WO',
  'ん': 'NN'
}

result = ARGV.each_with_object([]) do |string, a|
  a << string.chars.each_with_object({kanji: '', roma: ''}) do |c, h|
    h[:kanji] << c
    h[:roma] << CHAR_MAP[c.to_sym]
    h
  end
end
puts result.to_json