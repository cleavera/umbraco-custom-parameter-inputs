angular.module("umbraco")
    .controller("Macro.RichTextMacro",
        function ($scope) {
            $scope.textInput = {
                label: 'bodyText',
                description: '...',
                view: 'rte',
                value: $scope.model.value,
                config: {
                    editor: {
                        toolbar: ["link", "unlink", "bold", "italic", "underline", "strikethrough", "fontsizeselect", "forecolor"],
                        stylesheets: [],
                        font_formats: 'Gotham Condensed=gotham condensed,Heebo=heebo',
                        convert_fonts_to_spans: true,
                        font_size_classes: "header,subheading,cta,title,bigtext,regulartext,caption",
                        dimensions: {
                            height: 200
                        }
                    }
                }
            };
            $scope.$watch('textInput.value', function (newValue, oldValue) {
                $scope.model.value = newValue;
            });
        });