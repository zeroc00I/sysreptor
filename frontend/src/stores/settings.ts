import { CvssVersion } from "~/utils/cvss/base";
import { MarkdownEditorMode } from "~/utils/types";

export const useLocalSettings = defineStore('settings', {
  state: () => ({
    autoSaveEnabled: true,
    reportingMarkdownEditorMode: MarkdownEditorMode.MARKDOWN_AND_PREVIEW as MarkdownEditorMode,
    projectNoteMarkdownEditorMode: MarkdownEditorMode.MARKDOWN_AND_PREVIEW as MarkdownEditorMode,
    userNoteMarkdownEditorMode: MarkdownEditorMode.MARKDOWN_AND_PREVIEW as MarkdownEditorMode,
    designMarkdownEditorMode: MarkdownEditorMode.MARKDOWN_AND_PREVIEW as MarkdownEditorMode,
    templateMarkdownEditorMode: MarkdownEditorMode.MARKDOWN_AND_PREVIEW as MarkdownEditorMode,
    reportingSpellcheckEnabled: true,
    projectNoteSpellcheckEnabled: true,
    userNoteSpellcheckEnabled: true,
    designSpellcheckEnabled: true,
    templateSpellcheckEnabled: true,
    reportInputMenuSize: 15,
    templateInputMenuSize: 15,
    notebookInputMenuSize: 15,
    reportFieldDefinitionMenuSize: 15,
    findingFieldDefinitionMenuSize: 15,
    defaultNotesDefinitionMenuSize: 15,
    templateFieldFilterDesign: 'all',
    templateFieldFilterHiddenFields: [] as string[],
    noteExpandStates: {} as {[noteId: string]: boolean},
    cvssVersion: CvssVersion.CVSS31,
    subDrawerExpanded: true,
    theme: null as 'light'|'dark'|null,
  }),
  actions: {
    setNoteExpandState({ noteId, isExpanded }: { noteId: string, isExpanded: boolean }) {
      this.noteExpandStates[noteId] = isExpanded;
    },
    setAllSpellcheckSettings(val: boolean) {
      this.reportingSpellcheckEnabled = val;
      this.projectNoteSpellcheckEnabled = val;
      this.userNoteSpellcheckEnabled = val;
      this.designSpellcheckEnabled = val;
      this.templateSpellcheckEnabled = val;
    },
  },
  getters: {
    isNoteExpanded() {
      return (noteId: string) => {
        const val = this.noteExpandStates[noteId];
        return val === undefined ? true : val;
      };
    },
  },
  persist: {
    storage: persistedState.localStorage,
  }
})
