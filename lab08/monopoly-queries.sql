--SINGLE-TABLE
-- Retrieve a list of all the games, ordered by date with the most recent game coming first.
SELECT * 
FROM Game
ORDER BY time DESC;

--Retrieve all the games that occurred in the past week.
SELECT * 
FROM Game
WHERE time BETWEEN '2020-10-17' AND '2020-10-23';

--Retrieve a list of players who have (non-NULL) names.
SELECT *
FROM Player
WHERE name IS NOT null;

--Retrieve a list of IDs for players who have some game score larger than 2000.
SELECT DISTINCT playerID
FROM Playergame
WHERE score > 2000;

--Retrieve a list of players who have GMail accounts.
SELECT *
FROM Player
WHERE emailAddress LIKE '%@gmail%';

--MULTIPLE-TABLE
--Retrieve all “The King”’s game scores in decreasing order.
SELECT score
FROM Player, PlayerGame
WHERE Player.ID = playerID
AND Player.name = 'The King'
ORDER BY score DESC;

--Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT Player.name
FROM Player, PlayerGame, Game
WHERE Player.ID = playerID
AND Game.ID = gameID
AND time = '2006-06-28 13:20:00'
ORDER BY score DESC
LIMIT 1;

--So what does that P1.ID < P2.ID clause do in the last example query?
--It ensures P1 and P2 are different players and the pair is only selected once, not again in the reverse order.

--The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself?
--In class, the Part table was joined to itself to select subparts of a part. 
--Another example could be a table representing a person in a family. Suppose you want to find a certain familial relation, such as someon'e grandmother.
