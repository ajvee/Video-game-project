\c video_games;

INSERT INTO games (rated, title, genre, platform, release_date, game_content, score)
VALUES
 ('E', 'The Legend of Zelda: Breath of the Wild', 'Action, Adventure', 'Nintendo Switch', 2017, 'The Legend of Zelda: Breath of the Wild is an action-adventure game released for the Nintendo Switch in 2017. It is set in an open world environment where the player controls the protagonist, Link, as he explores the land of Hyrule, fights enemies, and solves puzzles to progress through the story. The game received critical acclaim for its innovative gameplay, beautiful visuals, and immersive world design.', 97 ),
 ('M', 'God of War', 'Action-Adventure, Hack and Slash', 'PlayStation 4', 2018, 'God of War is an action-adventure and hack-and-slash game released for the PlayStation 4 in 2018. It is the eighth installment in the God of War series and features protagonist Kratos in a new setting, based on Norse mythology. The game follows Kratos and his young son, Atreus, as they journey through a hostile world, battling monsters and gods to complete a personal quest. The game received critical acclaim for its stunning graphics, engaging storyline, and revamped gameplay mechanics. It won numerous awards, including Game of the Year at The Game Awards 2018.', 94 ),
 ('M', 'Red Dead Redemption 2', 'Action-Adventure, Western', 'PlayStation 4, Xbox One, PC', 2018, 'Red Dead Redemption 2 is an action-adventure game set in a Western-themed open world environment. It was released in 2018 for PlayStation 4, Xbox One, and PC. The game follows outlaw Arthur Morgan and his gang as they flee across America in the late 1800s, pursued by law enforcement and rival gangs. The game features a deep, engaging storyline with realistic graphics, immersive gameplay mechanics, and an open world that encourages exploration and player choice. The game received widespread critical acclaim for its storytelling, characters, and attention to detail, with many critics calling it one of the greatest video games ever made.', 97

),
 ('M', 'Assassin''s Creed Valhalla', 'Action-Adventure, Open World', 'PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, PC', 2020,'Assassins Creed Valhalla is an action-adventure game set in an open world environment based on Norse mythology. It was released in 2020 for PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, and PC. The game follows Eivor, a Viking raider who becomes embroiled in a conflict between the Brotherhood of Assassins and the Templar Order. The game features a deep, immersive storyline with stunning graphics, engaging gameplay mechanics, and an open world that encourages exploration and player choice. The game received positive reviews for its storytelling, characters, and attention to detail, with many critics praising the game for revitalizing the Assassins Creed series.', 84),
 ('M', 'The Witcher 3: Wild Hunt', 'Action-Adventure, RPG', 'PlayStation 4, Xbox One, PC', 2015, 'The Witcher 3: Wild Hunt is an action-adventure and role-playing game released for PlayStation 4, Xbox One, and PC in 2015. It is the third and final game in the Witcher series and follows protagonist Geralt of Rivia as he searches for his missing adopted daughter, Ciri, in a vast open world inspired by Slavic mythology. The game features a complex storyline, memorable characters, and engaging gameplay mechanics, including a robust combat system and deep RPG elements. The game received widespread critical acclaim for its storytelling, world-building, and attention to detail.', 93

);


INSERT INTO reviews (game_id, content, title, user_score, reviewer)
VALUES 
    ('1','Great game, highly recommended!', 'The Legend of Zelda: Breath of the Wild', 95, 'John Smith'),
    ('2','Amazing story and graphics!', 'God of War', 90, 'Jane Doe'),
    ('3','A classic that still holds up today', 'Red Dead Redemption 2', 100, 'Alex Johnson'),
    ('4','Addictive gameplay and great music', 'Assassin''s Creed Valhalla', 92, 'Sarah Lee'),
    ('5','Challenging but rewarding', 'The Witcher 3: Wild Hunt', 85, 'David Kim');
