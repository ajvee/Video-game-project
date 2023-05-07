\c video_games;

INSERT INTO games (rated, title, genre, platform, release_date)
VALUES
 ('E', 'The Legend of Zelda: Breath of the Wild', 'Action, Adventure', 'Nintendo Switch', 2017),
 ('M', 'God of War', 'Action-Adventure, Hack and Slash', 'PlayStation 4', 2018),
 ('M', 'Red Dead Redemption 2', 'Action-Adventure, Western', 'PlayStation 4, Xbox One, PC', 2018),
 ('M', 'Assassin''s Creed Valhalla', 'Action-Adventure, Open World', 'PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, PC', 2020),
 ('M', 'The Witcher 3: Wild Hunt', 'Action-Adventure, RPG', 'PlayStation 4, Xbox One, PC', 2015);


INSERT INTO reviews (game_id, content, title, user_score, reviewer)
VALUES 
    ('1','Great game, highly recommended!', 'The Legend of Zelda: Breath of the Wild', 95, 'John Smith'),
    ('2','Amazing story and graphics!', 'God of War', 90, 'Jane Doe'),
    ('3','A classic that still holds up today', 'Red Dead Redemption 2', 100, 'Alex Johnson'),
    ('4','Addictive gameplay and great music', 'Assassin''s Creed Valhalla', 92, 'Sarah Lee'),
    ('5','Challenging but rewarding', 'The Witcher 3: Wild Hunt', 85, 'David Kim');
