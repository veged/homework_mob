modules.define(
	'header', // имя блока
	['i-bem__dom'], // подключение зависимости

	// функция, в которую передаются имена используемых модулей
	function(provide, BEMDOM) {
		provide(BEMDOM.decl('header', { // декларация блока
			onSetMod: { // конструктор для описания реакции на события
				'js': {
					'inited': function() {
						this._input = this.findBlockInside('button');

						// событие, на которое будет реакция
						this._input.bindTo('click', function(e) {

							var node = document.querySelector('.menu');
							node.classList.add('menu_show');
						});
					}
				}
			}
		}));
	});
