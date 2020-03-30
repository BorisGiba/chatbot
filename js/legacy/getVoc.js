function getVoc(){
    var voc=["'d", "'ll", "'m", "'re", "'s", "'ve", 'a', 'aaaah', 'aaahh', 'abl', 'aboout', 'abort', 'aboslut', 'about', 'abroad', 'absolv', 'abysm', 'acceiv', 'account', 'act', 'ad', 'address', 'admir', 'adv', 'affirm', 'afraid', 'aft', 'afternoon', 'ag', 'again', 'ago', 'agr', 'agree', 'ah', 'ahah', 'ahahah', 'ahead', 'ai', 'al', 'alarm', 'allerg', 'almost', 'alon', 'along', 'already', 'alright', 'alrighty', 'also', 'altern', 'alway', 'am', 'amaz', 'amazebal', 'an', 'and', 'andrew', 'angry', 'anim', 'ann', 'annoy', 'anoth', 'anrgy', 'answ', 'any', 'anym', 'anyon', 'anyth', 'anytim', 'anyway', 'apart', 'aph', 'apolog', 'app', 'appl', 'apprecy', 'ar', 'architect', 'around', 'arrog', 'art', 'as', 'ask', 'asleep', 'aspir', 'asshol', 'assist', 'assum', 'at', 'attend', 'attract', 'autom', 'aw', 'away', 'awesom', 'baby', 'back', 'bad', 'band', 'barack', 'bas', 'basketbal', 'battery', 'be', 'beat', 'beauty', 'becaus', 'becom', 'bed', 'been', 'beer', 'beg', 'being', 'bel', 'believ', 'best', 'besty', 'bet', 'between', 'bff', 'bieb', 'big', 'biggest', 'bir', 'birthday', 'bit', 'bitch', 'bitcoin', 'blu', 'book', 'bor', 'born', 'borrow', 'boss', 'bot', 'boy', 'boyfriend', 'brag', 'brainy', 'brash', 'bravo', 'break', 'breath', 'bril', 'brin', 'bring', 'broccol', 'brok', 'broth', 'buddy', 'built', 'bul', 'bullshit', 'bus', 'busy', 'but', 'by', 'bye', 'ca', 'cal', 'can', 'canad', 'cancel', 'cap', 'capit', 'car', 'card', 'cas', 'catch', 'celebr', 'certain', 'chabot', 'chang', 'chant', 'chat', 'chatbo', 'chatbot', 'chatboth', 'che', 'cheap', 'check', 'chil', 'child', 'chillin', 'chines', 'cho', 'choos', 'ciao', 'city', 'class', 'clea', 'clear', 'clev', 'clim', 'clinton', 'clu', 'cocky', 'cod', 'coff', 'cognit', 'col', 'cold', 'colleg', 'com', 'comfort', 'common', 'complet', 'comput', 'conclud', 'concret', 'conf', 'confid', 'confirm', 'confus', 'connect', 'conscy', 'contradict', 'convers', 'cook', 'cooky', 'cool', 'coolest', 'correct', 'could', 'country', 'cours', 'crack', 'crap', 'crazy', 'cre', 'creepy', 'crit', 'crush', 'cry', 'crypto', 'cu', 'cut', 'cuz', 'cyborg', 'cyn', 'dat', 'day', 'dea', 'dear', 'deep', 'defin', 'definit', 'defint', 'delight', 'democr', 'dent', 'depress', 'describ', 'design', 'destroy', 'detail', 'detroy', 'devast', 'did', 'die', 'diff', 'dig', 'disagr', 'disappoint', 'discard', 'discuss', 'disgust', 'dish', 'disheart', 'dishonesty', 'dislik', 'dismiss', 'disregard', 'distress', 'dl', 'do', 'doe', 'doing', 'doky', 'doll', 'don', 'donald', 'doomsday', 'dop', 'down', 'download', 'drain', 'draw', 'dread', 'dream', 'dreamy', 'driv', 'dud', 'duh', 'dumb', 'dunno', 'each', 'ear', 'eat', 'educ', 'ego', 'ehm', 'elab', 'els', 'emoj', 'emot', 'empty', 'end', 'engin', 'engl', 'enough', 'enr', 'envy', 'ep', 'er', 'escap', 'ev', 'everyon', 'everyth', 'evil', 'ex', 'exact', 'excel', 'excit', 'excus', 'exhaust', 'exit', 'expect', 'expend', 'expery', 'explain', 'extraordin', 'extrem', 'fab', 'facebook', 'fact', 'fail', 'fair', 'fak', 'fal', 'fals', 'fam', 'famy', 'fantast', 'far', 'fascin', 'fast', 'fat', 'fav', 'favorit', 'fb', 'feel', 'feet', 'femin', 'few', 'fin', 'find', 'fir', 'first', 'follow', 'food', 'fool', 'for', 'forg', 'forget', 'framework', 'fre', 'freak', 'freedom', 'freez', 'friday', 'friend', 'fright', 'from', 'frust', 'fuck', 'ful', 'fun', 'funniest', 'funny', 'fury', 'gam', 'gandalf', 'gen', 'gend', 'geni', 'geny', 'germ', 'get', 'gif', 'gig', 'girl', 'girlfriend', 'giv', 'glad', 'glob', 'gloom', 'glory', 'go', 'god', 'going', 'gon', 'good', 'goodby', 'goodnight', 'goof', 'googl', 'gorg', 'got', 'gotch', 'gotcha', 'grand', 'gre', 'greedy', 'greet', 'griev', 'grow', 'grumpy', 'guess', 'guid', 'ha', 'had', 'hah', 'hahah', 'hahahah', 'hand', 'handsom', 'hang', 'hap', 'happy', 'hard', 'has', 'hassl', 'hat', 'hav', 'he', 'healthy', 'hear', 'heard', 'heart', 'heav', 'heck', 'heeey', 'heey', 'heh', 'heheh', 'hel', 'hello', 'help', 'her', 'hey', 'hi', 'hih', 'hil', 'him', 'hip', 'hist', 'hiy', 'hm', 'hmm', 'hmmm', 'hobby', 'hold', 'holy', 'hom', 'homeland', 'hometown', 'honest', 'hop', 'hor', 'horr', 'hot', 'hour', 'hous', 'how', 'howdy', 'hrhr', 'hug', 'huh', 'hum', 'humid', 'hungry', 'hurry', 'husband', 'i', 'ide', 'idea', 'idk', 'if', 'ign', 'im', 'import', 'imposs', 'improv', 'in', 'incoh', 'incorrect', 'incred', 'indee', 'indiff', 'ineq', 'info', 'inform', 'injust', 'ins', 'insomn', 'insomniac', 'insomny', 'insult', 'intellig', 'interest', 'into', 'intrigu', 'introduc', 'ip', 'iron', 'irony', 'irrelev', 'irrespons', 'irrit', 'is', 'issu', 'it', 'jap', 'japanes', 'jeal', 'jen', 'job', 'jok', 'just', 'justin', 'kardash', 'kid', 'kim', 'kind', 'kitty', 'knock', 'know', 'knowledg', 'lam', 'last', 'lat', 'laugh', 'learn', 'leav', 'left', 'less', 'let', 'liar', 'lib', 'libr', 'lie', 'lif', 'lik', 'lin', 'littl', 'liv', 'lmao', 'loc', 'lol', 'lon', 'long', 'look', 'loool', 'looool', 'lopez', 'lord', 'los', 'lost', 'lot', 'loud', 'lov', 'luck', 'lunch', 'luv', 'lying', 'mac', 'machin', 'mad', 'mag', 'magn', 'mak', 'man', 'manhat', 'many', 'marry', 'marvel', 'math', 'matrix', 'may', 'mayb', 'me', 'mean', 'meaningless', 'medicin', 'meet', 'meg', 'mem', 'men', 'met', 'microsoft', 'might', 'millen', 'mind', 'mindblow', 'minut', 'miss', 'mistak', 'ml', 'model', 'moly', 'mom', 'money', 'mont', 'mood', 'moon', 'mor', 'morn', 'most', 'moth', 'movy', 'much', 'mus', 'must', 'my', "n't", 'na', 'naah', 'naahh', 'nah', 'nam', 'nat', 'near', 'nearby', 'nee', 'neighb', 'neuro', 'nev', 'nevermind', 'new', 'next', 'ng', 'nic', 'nicest', 'night', 'nip', 'no', 'nobody', 'nonsens', 'nooo', 'noooo', 'nooooo', 'nop', 'norm', 'not', 'noth', 'now', 'numb', 'nut', 'o', 'obam', 'object', 'obs', 'obvy', 'of', 'off', 'offend', 'offlin', 'oh', 'ok', 'okay', 'okey', 'oky', 'old', 'omg', 'on', 'ont', 'oomg', 'opin', 'or', 'ord', 'oth', 'our', 'out', 'ov', 'over', 'overfit', 'overhyp', 'overload', 'overpaid', 'overtim', 'overwhelm', 'own', 'p', 'pancak', 'par', 'parallel', 'pardon', 'paul', 'paus', 'peopl', 'perfect', 'person', 'philosoph', 'phon', 'pick', 'pict', 'pil', 'pineappl', 'piss', 'pitty', 'pizz', 'plan', 'platform', 'play', 'pleas', 'polit', 'poor', 'pop', 'poss', 'pour', 'pray', 'presid', 'pretty', 'prob', 'problem', 'profess', 'profil', 'program', 'prom', 'pronount', 'purpos', 'qual', 'quest', 'quiet', 'quit', 'quot', 'r', 'rain', 'rainy', 'read', 'ready', 'real', 'reason', 'rec', 'recommend', 'red', 'rei', 'rel', 'relax', 'relig', 'remark', 'remind', 'rep', 'replac', 'reply', 'republ', 'request', 'research', 'resid', 'respond', 'respons', 'resta', 'return', 'rich', 'ridic', 'right', 'ring', 'rl', 'robot', 'rock', 'rud', 'run', 'rush', 'ryan', 'sad', 'said', 'sam', 'sarcasm', 'sarcast', 'satisfy', 'say', 'scar', 'scary', 'school', 'sci', 'screaming', 'screenshot', 'second', 'secret', 'see', 'seek', 'seem', 'sel', 'sens', 'sery', 'sexy', 'shak', 'sham', 'shar', 'shirt', 'shit', 'shop', 'should', 'show', 'shut', 'sick', 'sigh', 'sil', 'simpl', 'sist', 'sit', 'skip', 'sleep', 'sleepless', 'sleepy', 'slow', 'smal', 'smart', 'smil', 'smok', 'snor', 'snow', 'so', 'softw', 'solips', 'solipsist', 'solv', 'som', 'someon', 'somet', 'someth', 'somethig', 'sometim', 'somewh', 'song', 'soon', 'sorry', 'sos', 'sound', 'spac', 'speak', 'spec', 'splendid', 'sport', 'start', 'startup', 'stat', 'stil', 'stop', 'straight', 'strange', 'stressful', 'strive', 'stud', 'study', 'stuff', 'stupid', 'subject', 'sublim', 'such', 'suck', 'suggest', 'sup', 'superb', 'suppos', 'supr', 'sur', 'surf', 'suzan', 'swamp', 'sweet', 'swel', 'swift', 'system', 't', 'ta', 'tak', 'tal', 'talk', 'tank', 'tax', 'tayl', 'teach', 'tech', 'technolog', 'tel', 'temp', 'ter', 'termin', 'terr', 'terrifiy', 'test', 'text', 'than', 'thank', 'thanx', 'that', 'the', 'their', 'then', 'ther', 'they', 'thi', 'thing', 'think', 'thnx', 'though', 'thought', 'thrilled', 'thx', 'til', 'tim', 'tir', 'to', 'today', 'togeth', 'tokyo', 'tom', 'tomorrow', 'ton', 'tonight', 'too', 'top', 'torn', 'tot', 'town', 'traff', 'train', 'trash', 'travel', 'tremend', 'trick', 'triv', 'troubl', 'tru', 'trump', 'try', 'turn', 'tv', 'tweet', 'twit', 'typ', 'u', 'ub', 'unbear', 'unbeliev', 'understand', 'understood', 'unemploy', 'unfun', 'unhappy', 'unit', 'univers', 'unsatisfact', 'unus', 'up', 'upset', 'ur', 'us', 'useless', 'vagu', 'very', 'video', 'waaah', 'waah', 'wah', 'wait', 'wak', 'wan', 'want', 'warm', 'was', 'wassup', 'wast', 'watch', 'way', 'we', 'weary', 'weath', 'wed', 'week', 'weekend', 'weight', 'weird', 'weirdo', 'wel', 'welcom', 'went', 'wer', 'what', 'whatch', 'whatev', 'whazzup', 'when', 'wher', 'which', 'who', 'whol', 'whom', 'why', 'wick', 'wif', 'wil', 'wis', 'wisdom', 'wish', 'with', 'witty', 'wo', 'woaaaahh', 'woah', 'woahhh', 'wom', 'wond', 'wooow', 'work', 'world', 'worn', 'worry', 'worst', 'worthless', 'would', 'wow', 'woww', 'wowww', 'writ', 'wrong', 'wtf', 'wth', 'xd', 'ya', 'yap', 'yasss', 'ye', 'yeah', 'year', 'yeh', 'yep', 'yess', 'yesterday', 'yet', 'yo', 'yod', 'yolo', 'yoou', 'york', 'you', 'young', 'yourself', 'youtub', 'yup', 'zero', 'zuckerberg']
    return voc
}