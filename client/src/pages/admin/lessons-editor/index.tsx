import React, { useState, useMemo } from "react";

import { EditorState } from "draft-js";

import { Textarea, Panel } from "@layouts/editor";
import Input from "@components/input";
import Buttom from "@components/button";
import Checkbox from "@components/checkbox";

function LessonsEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [lessonName, setLessonName] = useState("");

  const [isLessonShow, setIsLessonShow] = useState(false);
  const [isRecommendationsShow, setisRecommendationsShow] = useState(true);

  const isButtonsDisabled = useMemo(() => {
    return lessonName.length ? false : true;
  }, [lessonName]);

  return (
    <div>
      <Input
        value={lessonName}
        onChange={setLessonName}
        className="mb-big"
        placeholder="Называние урока"
      ></Input>
      <Checkbox active={isLessonShow} onChange={setIsLessonShow}>
        Доступен просмотр
      </Checkbox>
      <Checkbox
        active={isRecommendationsShow}
        onChange={setisRecommendationsShow}
      >
        Показывать рекомендации
      </Checkbox>
      <Panel editorState={editorState} setEditorState={setEditorState} />
      <Textarea editorState={editorState} setEditorState={setEditorState} />
      <Buttom primary disabled={isButtonsDisabled}>
        Создать
      </Buttom>
    </div>
  );
}

export default LessonsEditor;
