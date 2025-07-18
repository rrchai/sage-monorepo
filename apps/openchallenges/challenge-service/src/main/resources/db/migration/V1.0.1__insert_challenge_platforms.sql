-- Insert challenge platforms
INSERT INTO challenge_platform (id, slug, name, avatar_key, website_url, created_at, updated_at) VALUES
(1, 'synapse', 'Synapse', 'logo/synapse.png', 'https://synapse.org/', '2023-08-09 23:01:32', '2023-11-21 01:07:14'),
(3, 'cami', 'CAMI', 'logo/cami.png', 'https://data.cami-challenge.org/', '2023-08-09 23:01:32', '2023-10-19 21:50:25'),
(5, 'grand-challenge', 'Grand Challenge', 'logo/grand-challenge.png', 'https://grand-challenge.org/', '2023-08-09 23:01:32', '2023-10-19 21:50:26'),
(6, 'precision-fda', 'precisionFDA', 'logo/precisionfda.png', 'https://precision.fda.gov/challenges', '2023-08-09 23:01:32', '2023-11-02 18:45:58'),
(8, 'kaggle', 'Kaggle', 'logo/kaggle.png', 'https://www.kaggle.com/', '2023-08-09 23:01:32', '2023-10-19 21:50:28'),
(9, 'codalab', 'CodaLab', 'logo/codalab.jpg', 'https://codalab.lisn.upsaclay.fr/', '2023-08-09 23:01:32', '2023-10-19 21:50:30'),
(10, 'codabench', 'CodaBench', 'logo/codalab.jpg', 'https://www.codabench.org/', '2023-08-09 23:01:32', '2023-10-19 21:50:30'),
(13, 'eterna', 'Eterna', 'logo/eterna.svg', 'https://eternagame.org/', '2023-08-09 23:01:32', '2023-10-19 21:50:33'),
(15, 'nightingale-os', 'Nightingale OS', 'logo/nightingale-os.jpeg', 'https://app.nightingalescience.org/contests', '2023-08-22 15:58:49', '2023-12-12 19:05:13'),
(16, 'evalai', 'EvalAI', 'logo/evalai.png', 'https://eval.ai/', '2023-09-15 16:00:34', '2023-12-12 18:18:37'),
(17, 'cache', 'CACHE', 'logo/cache.png', 'https://cache-challenge.org/', '2023-10-16 18:43:36', '2023-12-06 01:09:56'),
(18, 'cameo', 'CAMEO', 'logo/cameo.png', 'https://www.cameo3d.org', '2023-11-13 22:47:03', '2023-12-12 18:18:38'),
(19, 'drivendata', 'DrivenData', 'logo/drivendata.jpg', 'https://www.drivendata.org/', '2023-11-16 21:57:43', '2023-12-12 18:18:39'),
(20, 'devpost', 'Devpost', 'logo/devpost.jpg', 'https://devpost.com/', '2024-01-09 16:41:39', '2024-01-11 23:14:56'),
(21, 'zindi', 'Zindi', 'logo/zindi.jpg', 'https://zindi.africa/', '2024-01-09 18:56:59', '2024-01-11 23:15:00');

-- Update the sequence to continue from the highest ID to avoid conflicts
SELECT setval('challenge_platform_id_seq', (SELECT MAX(id) FROM challenge_platform));