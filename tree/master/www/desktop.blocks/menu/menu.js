modules.define(
	'menu', // имя блока
	['i-bem__dom'], // подключение зависимости

	// функция, в которую передаются имена используемых модулей
	function(provide, BEMDOM) {
		provide(BEMDOM.decl('menu', { // декларация блока
			onSetMod: { // конструктор для описания реакции на события
				'js': {
					'inited': function() {
						this._input = this.findBlockInside('button');

						// событие, на которое будет реакция
						this._input.bindTo('click', function(e) {

							e.preventDefault();

							var node = document.querySelector('.menu');
							requestAnimationFrame(function() {
								node.classList.remove('menu_show');
							});
						});


						this.bindTo('pointerdown', function(e) {
							this.x = e.clientX;
							navigator.vibrate && navigator.vibrate(10);

						});

						this.bindTo('pointerup', function(e) {
							const node = e.currentTarget;
							node.style.transform = '';
						});

						this.bindTo('pointercancel', function(e) {
							const node = e.currentTarget;
							node.style.transform = '';
						});
						this.bindTo('pointerleave', function(e) {
							const node = e.currentTarget;
							node.style.transform = '';
						});
						this.bindTo('pointerout', function(e) {
							const node = e.currentTarget;
							node.style.transform = '';
						});

						this.bindTo('pointermove', function(e) {
							const diff = this.x - e.clientX;
							const node = e.currentTarget;
							const width = document.documentElement.clientWidth / 3;

							if (!node.classList.contains('menu_show')) {
								return;
							}
							if (diff >= 0) {
								if (diff > width) {
									requestAnimationFrame(function() {
										node.style.transform = '';
										node.classList.remove('menu_show');
									});

								} else {
									requestAnimationFrame(function() {
										node.style.transform = 'translate(-' + diff + 'px)';
									});
								}
							} else {
								node.style.transform = '';
							}
						});
					}
				}
			}
		}));
	});
