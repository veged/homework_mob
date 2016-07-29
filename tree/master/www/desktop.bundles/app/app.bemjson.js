({
	block: 'page',
	title: 'Приложение',
	head: [
		{
			elem: 'css',
			url: 'app.min.css'
		},
		{
			elem: 'meta',
			attrs: {
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			}
		},
	],
	scripts: [
		{
			elem: 'js',
			url: 'app.min.js'
		},
		{
			elem: 'js',
			url: 'pep.js'
		},
		{
			elem: 'js',
			url: 'cordova.js'
		}
	],
	mods: { theme: 'islands' },
	content: [
		{
			block: 'front',
			content: [
				{
					block: 'header',
					tag: 'header',
					content: [
						{
							block: 'button',
							mods: {
								theme: 'islands',
								size: 'xl'
							},
							text: 'меню'
						},
						{
							elem: 'name',
							tag: 'h1',
							content: 'Телепрограмма'
						}
					]
				},

				{
					block: 'program',
					content: [
						{
							elem: 'time',
							tag: 'span',
							content: '16:24'
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'Банши. Сезон 2. 5-я серия'
						}
					]
				},
				{
					block: 'program',
					content: [
						{
							elem: 'time',
							tag: 'span',
							content: '17:00'
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'МузРаскрутка'
						}
					]
				},
				{
					block: 'program',
					content: [
						{
							elem: 'time',
							tag: 'span',
							content: '17:03'
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'Только жирные хиты'
						}
					]
				},
				{
					block: 'program',
					content: [
						{
							elem: 'time',
							tag: 'span',
							content: '17:30'
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'International SmackDown. 867-я серия'
						}
					]
				},
				{
					block: 'program',
					content: [
						{
							elem: 'time',
							tag: 'span',
							content: '17:03'
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'Чарли Чаплин. Фрагменты музыки к кинофильмам'
						}
					]
				}

			]
		},

		{
			block: 'menu',
			content: [
				{
					elem: 'header',
					content: [
						{
							block: 'button',
							mods: {
								theme: 'islands',
								size: 'xl'
							},
							text: 'закрыть'
						},
						{
							elem: 'name',
							tag: 'h1',
							content: 'Меню'
						}
					]
				},

				{
					elem: 'item',
					content: 'Футбол'
				},
				{
					elem: 'item',
					content: 'Сидкомы'
				},
				{
					elem: 'item',
					content: 'Музыка'
				},
				{
					elem: 'item',
					content: '....'
				},

				{
					elem: 'delimiter'
				},

				{
					block: 'cannel',
					content: [
						{
							elem: 'logo',
							tag: 'img',
							attrs: { src: 'img/1.png' }

						},
						{
							elem: 'name',
							tag: 'span',
							content: 'Первый'
						}
					]
				},

				{
					block: 'cannel',
					content: [
						{
							elem: 'logo',
							tag: 'img',
							attrs: { src: 'img/2x2.jpeg' }
						},
						{
							elem: 'name',
							tag: 'span',
							content: '2х2'
						}
					]
				},

				{
					block: 'cannel',
					content: [
						{
							elem: 'logo',
							tag: 'img',
							attrs: { src: 'img/mustv.png' }
						},
						{
							elem: 'name',
							tag: 'span',
							content: 'МУЗ-ТВ'
						}
					]
				},
			]
		}
	]
})
